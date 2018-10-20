import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub433Component} from "./stub433.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub433Component
        }])
    ],
    declarations: [
        Stub433Component
    ]
})
export class Stub433Module {

}
