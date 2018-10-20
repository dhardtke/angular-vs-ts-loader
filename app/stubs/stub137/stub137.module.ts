import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {Stub137Component} from "./stub137.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([{
            path: "",
            component: Stub137Component
        }])
    ],
    declarations: [
        Stub137Component
    ]
})
export class Stub137Module {

}
