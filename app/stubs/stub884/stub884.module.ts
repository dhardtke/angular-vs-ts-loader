import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub884Component} from "./stub884.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub884Component
        }])
    ],
    declarations: [
        Stub884Component
    ]
})
export class Stub884Module {

}
