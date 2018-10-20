import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub589Component} from "./stub589.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub589Component
        }])
    ],
    declarations: [
        Stub589Component
    ]
})
export class Stub589Module {

}
