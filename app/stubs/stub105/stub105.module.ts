import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub105Component} from "./stub105.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub105Component
        }])
    ],
    declarations: [
        Stub105Component
    ]
})
export class Stub105Module {

}
