import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub280Component} from "./stub280.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub280Component
        }])
    ],
    declarations: [
        Stub280Component
    ]
})
export class Stub280Module {

}
